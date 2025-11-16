import React from 'react';
import config from '../config';

interface LaptopPhoneSyncIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name LaptopPhoneSyncIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/laptop-phone-sync)
 * @see {@link https://clicons.dev/icon/laptop-phone-sync}
 */
const LaptopPhoneSyncIcon = React.forwardRef<SVGSVGElement, LaptopPhoneSyncIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M15.9999 13.5001V17.5001C15.9999 18.9143 15.9999 19.6214 16.4392 20.0608C16.8786 20.5001 17.5857 20.5001 18.9999 20.5001C20.4141 20.5001 21.1212 20.5001 21.5605 20.0608C21.9999 19.6214 21.9999 18.9143 21.9999 17.5001V13.5001C21.9999 12.0859 21.9999 11.3788 21.5605 10.9395C21.1212 10.5001 20.4141 10.5001 18.9999 10.5001C17.5857 10.5001 16.8786 10.5001 16.4392 10.9395C15.9999 11.3788 15.9999 12.0859 15.9999 13.5001Z'
    }
  ],
  [
    'path',
    {
      d: 'M3.99988 16.5005V8.50049C3.99988 6.14347 3.99988 4.96495 4.73254 4.23272C5.46521 3.50049 6.64442 3.50049 9.00283 3.50049H16.007C18.3654 3.50049 19.5446 3.50049 20.2773 4.23272C20.8346 4.78969 20.9679 5.60486 20.9999 7.00049'
    }
  ],
  [
    'path',
    {
      d: 'M12.9999 20.5005H2.51567C2.13273 20.5005 1.88367 20.1093 2.05493 19.7769L3.99988 16.5005H12.9999'
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

LaptopPhoneSyncIcon.displayName = 'LaptopPhoneSyncIcon';
export default LaptopPhoneSyncIcon;
