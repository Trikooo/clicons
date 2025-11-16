import React from 'react';
import config from '../config';

interface MoneySendSquareIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name MoneySendSquareIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/money-send-square)
 * @see {@link https://clicons.dev/icon/money-send-square}
 */
const MoneySendSquareIcon = React.forwardRef<SVGSVGElement, MoneySendSquareIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M12.002 9.00146C10.8974 9.00146 10.002 9.67303 10.002 10.5015C10.002 11.3299 10.8974 12.0015 12.002 12.0015C13.1065 12.0015 14.002 12.6731 14.002 13.5015C14.002 14.3299 13.1065 15.0015 12.002 15.0015M12.002 9.00146C12.8728 9.00146 13.6136 9.41886 13.8881 10.0015M12.002 9.00146V8.00146M12.002 15.0015C11.1311 15.0015 10.3903 14.5841 10.1158 14.0015M12.002 15.0015V16.0015'
    }
  ],
  [
    'path',
    {
      d: 'M13.5 2.50146C13.5 2.50146 12.6839 2.50146 12 2.50146C7.52166 2.50146 5.28249 2.50146 3.89124 3.89271C2.5 5.28395 2.5 7.52312 2.5 12.0015C2.5 16.4798 2.5 18.719 3.89124 20.1103C5.28249 21.5015 7.52166 21.5015 12 21.5015C16.4783 21.5015 18.7175 21.5015 20.1088 20.1103C21.5 18.719 21.5 16.4798 21.5 12.0015C21.5 11.3176 21.5 10.5015 21.5 10.5015'
    }
  ],
  [
    'path',
    {
      d: 'M16.5 7.49927L20.6758 3.32107M21.5 6.97751L21.3818 3.88602C21.3818 3.15737 20.9467 2.70339 20.1542 2.64612L17.0302 2.49927'
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

MoneySendSquareIcon.displayName = 'MoneySendSquareIcon';
export default MoneySendSquareIcon;
