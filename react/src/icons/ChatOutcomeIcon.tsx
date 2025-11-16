import React from 'react';
import config from '../config';

interface ChatOutcomeIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name ChatOutcomeIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/chat-outcome)
 * @see {@link https://clicons.dev/icon/chat-outcome}
 */
const ChatOutcomeIcon = React.forwardRef<SVGSVGElement, ChatOutcomeIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M12.0045 11H12.0135M8.00903 11H8.018'
    }
  ],
  [
    'path',
    {
      d: 'M12 3C10.5209 3 9.09517 3.0309 7.7562 3.08819C5.3157 3.1926 4.09545 3.24481 3.13007 4.21745C2.16469 5.19009 2.12282 6.37683 2.03909 8.7503C2.01346 9.47679 2 10.2292 2 11C2 11.7708 2.01346 12.5232 2.03909 13.2497C2.12282 15.6232 2.16469 16.8099 3.13007 17.7825C4.09545 18.7552 5.31569 18.8074 7.75619 18.9118C7.83715 18.9153 7.91842 18.9186 8 18.9219V21.2701C8 21.6732 8.32679 22 8.72991 22C8.90419 22 9.07273 21.9376 9.20503 21.8242L11.3845 19.9553C11.9325 19.4855 12.2064 19.2506 12.532 19.1266C12.8576 19.0026 13.2282 18.9955 13.9693 18.9815C14.7498 18.9667 15.5098 18.9432 16.2437 18.9118C18.6843 18.8074 19.9046 18.7552 20.8699 17.7826C21.8353 16.8099 21.8772 15.6232 21.9609 13.2497C21.9865 12.5232 22 11.7708 22 11C22 10.6629 21.9974 10.3294 21.9924 10'
    }
  ],
  [
    'path',
    {
      d: 'M19 2C19 2 22 4.20947 22 5.00002C22 5.79058 19 8 19 8M21.5 5.00002L15 5.00002'
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

ChatOutcomeIcon.displayName = 'ChatOutcomeIcon';
export default ChatOutcomeIcon;
