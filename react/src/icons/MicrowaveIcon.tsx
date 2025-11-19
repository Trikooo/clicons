import React from 'react';
import config from '../config';

interface MicrowaveIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name MicrowaveIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/microwave)
 * @see {@link https://clicons.dev/icon/microwave}
 */
const MicrowaveIcon = React.forwardRef<SVGSVGElement, MicrowaveIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M2 15V7C2 5.11438 2 4.17157 2.58579 3.58579C3.17157 3 4.11438 3 6 3H18C19.8856 3 20.8284 3 21.4142 3.58579C22 4.17157 22 5.11438 22 7V15C22 16.8856 22 17.8284 21.4142 18.4142C20.8284 19 19.8856 19 18 19H6C4.11438 19 3.17157 19 2.58579 18.4142C2 17.8284 2 16.8856 2 15Z'
    }
  ],
  [
    'path',
    {
      d: 'M19 6.00895V6M19 9.00447V8.99553M19 12V11.9911'
    }
  ],
  [
    'path',
    {
      d: 'M5 14V8C5 7.05719 5 6.58579 5.29289 6.29289C5.58579 6 6.05719 6 7 6H14C14.9428 6 15.4142 6 15.7071 6.29289C16 6.58579 16 7.05719 16 8V14C16 14.9428 16 15.4142 15.7071 15.7071C15.4142 16 14.9428 16 14 16H7C6.05719 16 5.58579 16 5.29289 15.7071C5 15.4142 5 14.9428 5 14Z'
    }
  ],
  [
    'path',
    {
      d: 'M5 19V21M19 19V21'
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

MicrowaveIcon.displayName = 'MicrowaveIcon';
export default MicrowaveIcon;
