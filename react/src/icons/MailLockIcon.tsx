import React from 'react';
import config from '../config';

interface MailLockIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name MailLockIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/mail-lock)
 * @see {@link https://clicons.dev/icon/mail-lock}
 */
const MailLockIcon = React.forwardRef<SVGSVGElement, MailLockIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M2 5L8.91302 8.91697C11.4616 10.361 12.5384 10.361 15.087 8.91697L22 5'
    }
  ],
  [
    'path',
    {
      d: 'M11.9942 19.4954C11.0292 19.4954 10.0644 19.4832 9.0947 19.4588C5.94803 19.3797 4.3747 19.3403 3.24424 18.2052C2.11376 17.07 2.08109 15.5377 2.01576 12.4729C1.99475 11.4875 1.99474 10.5079 2.01575 9.52248C2.08109 6.45778 2.11375 4.92543 3.24423 3.7903C4.3747 2.65517 5.94803 2.61563 9.09469 2.53655C11.034 2.48781 12.9543 2.48781 14.8937 2.53656C18.0404 2.61565 19.6136 2.65519 20.7442 3.79031C21.8746 4.92544 21.9073 6.45779 21.9726 9.5225C21.9831 10.0152 21.9884 10.0066 21.9884 10.4978'
    }
  ],
  [
    'path',
    {
      d: 'M16.7394 15.6776L16.7394 14.2872C16.7394 14.0819 16.7479 13.874 16.8216 13.6822C17.0175 13.1717 17.5365 12.5029 18.4815 12.5029C19.4264 12.5029 19.9659 13.1717 20.1618 13.6822C20.2354 13.874 20.244 14.0819 20.244 14.2872L20.244 15.6776M16.8089 21.5005H20.1949C21.1917 21.5005 21.9998 20.6939 21.9998 19.6989V17.6976C21.9998 16.7026 21.1917 15.896 20.1949 15.896H16.8089C15.812 15.896 15.0039 16.7026 15.0039 17.6976V19.6989C15.0039 20.6939 15.812 21.5005 16.8089 21.5005Z'
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

MailLockIcon.displayName = 'MailLockIcon';
export default MailLockIcon;
