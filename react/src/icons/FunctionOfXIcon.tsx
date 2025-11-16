import React from 'react';
import config from '../config';

interface FunctionOfXIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name FunctionOfXIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/function-of-x)
 * @see {@link https://clicons.dev/icon/function-of-x}
 */
const FunctionOfXIcon = React.forwardRef<SVGSVGElement, FunctionOfXIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M2 18.2222C2.18866 19.0724 2.56908 20 3.56235 20C5.28118 20 5.71088 18.2222 7 12C8.28912 5.77778 8.71882 4 10.4376 4C11.4309 4 11.8113 4.92763 12 5.77778M4.91667 9.77778H10.4376'
    }
  ],
  [
    'path',
    {
      d: 'M21 12C22.3804 15.253 22.2854 16.9808 21 20'
    }
  ],
  [
    'path',
    {
      d: 'M12 12C10.6196 15.253 10.7146 16.9808 12 20'
    }
  ],
  [
    'path',
    {
      d: 'M14.2891 13.9992C15.093 13.9692 15.5515 14.064 15.8227 14.5459C16.1515 15.216 16.9785 17.0679 17.1835 17.472C17.3073 17.6489 17.4715 17.904 17.9995 17.9875L18.7099 18'
    }
  ],
  [
    'path',
    {
      d: 'M19.0025 14C17.8793 14 17.0873 15.288 16.5593 15.936C15.7913 16.944 14.927 18.05 13.9961 18'
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

FunctionOfXIcon.displayName = 'FunctionOfXIcon';
export default FunctionOfXIcon;
