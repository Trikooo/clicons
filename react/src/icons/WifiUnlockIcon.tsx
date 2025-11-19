import React from 'react';
import config from '../config';

interface WifiUnlockIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name WifiUnlockIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/wifi-unlock)
 * @see {@link https://clicons.dev/icon/wifi-unlock}
 */
const WifiUnlockIcon = React.forwardRef<SVGSVGElement, WifiUnlockIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M8.5 15.5C9.76795 14.2321 11.4378 13.7679 13 14.1077'
    }
  ],
  [
    'path',
    {
      d: 'M5.5 12C8.67327 8.85033 12.1221 8.16715 15.5 10.0149'
    }
  ],
  [
    'path',
    {
      d: 'M2 8C8.31579 2.66669 15.6842 2.66668 22 7.99989'
    }
  ],
  [
    'path',
    {
      d: 'M16.5312 15.36V13.9523C16.5312 12.8741 17.4127 12 18.5 12C18.9887 12 19.4359 12.1766 19.7801 12.469M17.8437 21H19.1563C20.1777 21 20.6884 21 21.0749 20.7951C21.3802 20.6333 21.6302 20.3854 21.7934 20.0827C22 19.6993 22 19.1929 22 18.18C22 17.1671 22 16.6607 21.7934 16.2773C21.6302 15.9746 21.3802 15.7267 21.0749 15.5649C20.6884 15.36 20.1777 15.36 19.1563 15.36H17.8437C16.8223 15.36 16.3116 15.36 15.9251 15.5649C15.6198 15.7267 15.3698 15.9746 15.2066 16.2773C15 16.6607 15 17.1671 15 18.18C15 19.1929 15 19.6993 15.2066 20.0827C15.3698 20.3854 15.6198 20.6333 15.9251 20.7951C16.3116 21 16.8223 21 17.8437 21Z'
    }
  ]
];

    const renderElement = (item: any, index: number): React.ReactElement => {
      const tag = item[0];
      const attrs = item[1];
      const children = item[2];
      const Element = tag as any;

      const processedAttrs: any = { ...attrs };

      // Apply color and stroke properties to shape elements
      const isShapeElement = ['path', 'circle', 'rect', 'line', 'polyline', 'polygon', 'ellipse'].includes(tag);

      if (isShapeElement) {
        if (!processedAttrs.stroke) processedAttrs.stroke = finalColor;
        if (!processedAttrs.fill) processedAttrs.fill = 'none';

        if (!processedAttrs.strokeWidth) {
          processedAttrs.strokeWidth = finalAbsoluteStrokeWidth
            ? finalStrokeWidth
            : finalStrokeWidth * (finalSize / 24);
        }
        if (!processedAttrs.strokeLinecap) processedAttrs.strokeLinecap = 'round';
        if (!processedAttrs.strokeLinejoin) processedAttrs.strokeLinejoin = 'round';
      }

      // Handle nested elements
      if (children) {
        if (Array.isArray(children)) {
          return <Element key={index} {...processedAttrs}>{children.map(renderElement)}</Element>;
        } else if (typeof children === 'string') {
          return <Element key={index} {...processedAttrs}>{children}</Element>;
        }
      }

      return <Element key={index} {...processedAttrs} />;
    };

    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width={finalSize}
        height={finalSize}
        viewBox="0 0 24 24"
        fill="none"
        className={className}
        {...rest}
      >
        {iconData.map(renderElement)}
      </svg>
    );
  }
);

WifiUnlockIcon.displayName = 'WifiUnlockIcon';
export default WifiUnlockIcon;
